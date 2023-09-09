import uniqid from 'uniqid';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { useCurrentUser } from '../../../../../../../../auth/hooks/useCurrentUser';
import { useReactHookForm } from '../../../../../../../hooks/useReactHookForm';

interface UploadModalToLibraryFormData {
  author: string;
  title: string;
  genre: string;
  song: any;
  image: any;
}

interface UploadToLibraryFormProps {
  onClose: () => void;
}

function useUploadToLibraryForm({ onClose }: UploadToLibraryFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { user } = useCurrentUser();
  const router = useRouter();

  const supabaseClient = useSupabaseClient();

  const { register, handleSubmitReactHookForm, resetForm, errors } =
    useReactHookForm<UploadModalToLibraryFormData>({
      defaultValues: {
        author: '',
        title: '',
        genre: '',
        song: null,
        image: null
      }
    });

  const handleUploadToLibrary = handleSubmitReactHookForm({
    dirtyFieldsOnly: false,
    onSubmit: async (data: UploadModalToLibraryFormData) => {
      console.log(data);
      try {
        setIsLoading(true);

        const imageFile = data.image?.[0];
        const songFile = data.song?.[0];

        if (!imageFile || !songFile || !user) {
          toast.error('Empty fields');
          return;
        }

        const uniqueId = uniqid();

        //upload song file
        const { data: songData, error: songError } =
          await supabaseClient.storage
            .from('songs')
            .upload(`song-${data.title}-${uniqueId}`, songFile, {
              cacheControl: '3600',
              upsert: false
            });

        if (songError) {
          setIsLoading(false);
          return toast.error('Failed song upload');
        }

        //upload image file
        const { data: imageData, error: imageError } =
          await supabaseClient.storage
            .from('images')
            .upload(`image-${data.title}-${uniqueId}`, imageFile, {
              cacheControl: '3600',
              upsert: false
            });

        if (songError) {
          setIsLoading(false);
          return toast.error('Failed song upload');
        }

        if (imageError) {
          setIsLoading(false);
          return toast.error('Failed image upload');
        }

        const { error: supabaseError } = await supabaseClient
          .from('songs')
          .insert({
            user_id: user.id,
            title: data.title,
            author: data.author,
            genre: data.genre,
            image_path: imageData.path,
            song_path: songData.path
          });

        if (supabaseError) {
          return toast.error(supabaseError.message);
        }

        router.refresh();

        toast.success('Song added!');

        resetForm();
        onClose();
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
  });

  return {
    handleUploadToLibrary,
    resetForm,
    register,
    isFormLoading: isLoading,
    validationErrors: {
      authorError: errors.author?.message,
      titleError: errors.title?.message,
      genreError: errors.genre?.message,
      songError: errors.song?.message,
      imageError: errors.image?.message
    },
    registerFields: {
      registerAuthor: register('author', { required: true }),
      registerTitle: register('title', { required: true }),
      registerGenre: register('genre', { required: true }),
      registerSongfile: register('song', { required: true }),
      registerImageFile: register('image', { required: true })
    }
  };
}

export default useUploadToLibraryForm;
