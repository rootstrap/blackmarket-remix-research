import SearchIcon from '~/icons/search_icon.svg';

export const SearchBar = () => {
  return (
    <div className="relative w-1/2">
      <input
        type="text"
        className="h-10 w-full rounded-lg border-1 border-solid border-black p-3 text-black placeholder:text-black focus:outline-none"
        placeholder="Search for products"
      />
      <img src={SearchIcon} alt="Search Icon" className="absolute top-3 right-3 h-4 w-4" />
    </div>
  );
};
