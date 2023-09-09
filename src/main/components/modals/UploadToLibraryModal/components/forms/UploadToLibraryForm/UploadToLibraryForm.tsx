import { Input } from 'postcss';

function UploadToLibraryForm() {
  return <Input id="title" disabled={isLoading}></Input>;
}

export default UploadToLibraryForm;
