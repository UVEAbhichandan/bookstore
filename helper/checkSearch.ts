export const checkSearch = (name: string, searchVal: string) => {
    return name
      .toLowerCase()
      .split(" ")
      .join("")
      .includes(searchVal.toLowerCase().split(" ").join(""));
  };