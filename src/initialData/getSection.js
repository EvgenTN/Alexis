
const getSection = (arr, path) => {
  
  const filter = arr.filter(item => {      
    return item.href === path
  });
  return filter[0];
};

export default getSection;