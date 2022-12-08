const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// завдання 3

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];



const gallaryListRef = document.createElement("ul")
gallaryListRef.classList.add("gallery");



const creataGallaryRef = images.map(image => {
 const gallaryItemRef = document.createElement("li")
  gallaryItemRef.classList.add("gallary__item")

  const gallaryImgRef = document.createElement("img")
  gallaryImgRef.classList.add("gallary__item-pic")
  gallaryImgRef.src = image.url
  gallaryImgRef.alt = image.alt
  gallaryItemRef.append(gallaryImgRef)
  
  return gallaryItemRef
 


})
gallaryListRef.append(...creataGallaryRef)

const addImages = document.querySelector("body")


addImages.insertBefore(gallaryListRef, addImages.children[4])



console.log(addImages);
 
console.log(gallaryListRef);
console.log(gallaryItemRef);

