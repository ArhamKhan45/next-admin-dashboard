//commonn components types

//searchbox

export type SearchBoxProps = {
  searchCn?: string | undefined;
  btnCn?: string | undefined;
  myplaceholder: string;
  handler?: (keyword?: string) => void;
};
