export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const exterior: Photo = {
  src: "/pasted-image.jpg",
  alt: "The Starscape Hotel & Restaurant building on Broadway, with its red balcony railings and palm trees",
  width: 397,
  height: 298
};

export const roomTeal: Photo = {
  src: "/pasted-image-1.jpg",
  alt: "A guest room with teal walls, a made double bed, mosquito net, framed prints and air conditioning",
  width: 397,
  height: 298
};

export const roomBurgundy: Photo = {
  src: "/pasted-image-2.jpg",
  alt: "A guest room with a deep red feature wall, double bed and seating area",
  width: 224,
  height: 298
};

export const dinnerPlatter: Photo = {
  src: "/pasted-image-3.jpg",
  alt: "A dinner table set with a long crisp dosa, fries, a sizzling platter and dipping sauces",
  width: 397,
  height: 298
};

export const poolTable: Photo = {
  src: "/pasted-image-4.jpg",
  alt: "A guest lining up a shot at the pool table in the games room",
  width: 224,
  height: 298
};

export const balconyView: Photo = {
  src: "/pasted-image-5.jpg",
  alt: "View from the balcony over leafy gardens and rooftops in Northrise",
  width: 224,
  height: 298
};

export const breakfastBowl: Photo = {
  src: "/pasted-image-6.jpg",
  alt: "A bowl of food served at a dining table in the restaurant",
  width: 224,
  height: 398
};

export const galleryPhotos: Photo[] = [
exterior,
roomBurgundy,
dinnerPlatter,
balconyView,
roomTeal,
poolTable,
breakfastBowl];