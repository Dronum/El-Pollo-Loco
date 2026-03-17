export class DrawableObject {
  img = new Image();
  imageCache = {};
  currentImage = 0;
  x = 120;
  y = 280;
  height = 150;
  width = 100;



 loadImage(path) {
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

   loadImages(_imgArr) {
    arr.forEach((imgpath) => {
      let img = new Image();
      img.src = imgpath;
      this.imageCache[imgpath] = img;
    });
  }

}