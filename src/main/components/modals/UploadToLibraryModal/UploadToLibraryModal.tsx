'use client';

import { useCallback } from 'react';

import { Modal } from '../Modal';
import { useUploadToLibraryModal } from './hooks/useUploadToLibraryModal';
import { useUploadToLibraryForm } from './components/forms/UploadToLibraryForm/hooks';
import { InputHelper } from '../../helpers/InputHelper';
import { ButtonHelper } from '../../helpers/ButtonHelper';

function UploadToLibraryModal() {
  const uploadModal = useUploadToLibraryModal();

  const {
    resetForm,
    handleUploadToLibrary,
    register,
    validationErrors,
    isFormLoading
  } = useUploadToLibraryForm({ onClose: uploadModal.onClose });

  const handleOnChange = useCallback<(open: boolean) => void>(
    (open) => {
      if (!open) {
        resetForm();
        uploadModal.onClose();
      }
    },
    [resetForm, uploadModal]
  );

  return (
    <Modal
      title="Add a song"
      description="upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={handleOnChange}
    >
      <form onSubmit={handleUploadToLibrary} className="flex flex-col gap-y-4">
        <InputHelper
          id="title"
          error={validationErrors.titleError}
          placeholder="Song title"
          {...register('title', { required: true })}
        />

        <InputHelper
          id="author"
          error={validationErrors.authorError}
          placeholder="Song author"
          {...register('author', { required: true })}
        />

        <InputHelper
          id="genre"
          error={validationErrors.genreError}
          placeholder="Song genre"
          {...register('genre', { required: true })}
        />

        <div>
          <div className="pb-1">Select song file</div>

          <InputHelper
            id="song"
            error={validationErrors.songError?.toString()}
            type="file"
            accept=".mp3"
            {...register('song', { required: true })}
          />
        </div>

        <div>
          <div className="pb-1">Select album cover</div>
          <InputHelper
            id="image"
            error={validationErrors.imageError?.toString()}
            type="file"
            accept="image/*"
            {...register('image', { required: true })}
          />
        </div>

        <ButtonHelper disabled={isFormLoading} type="submit">
          {isFormLoading ? 'Uploading...' : 'Create'}
        </ButtonHelper>
      </form>
    </Modal>
  );
}

export default UploadToLibraryModal;
