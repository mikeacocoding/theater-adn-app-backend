export default class Movie {
  private id: string;
  private title: string;
  private description: string;
  private imageUrl: string;
  private price: number;

  constructor(
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    price: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
  }

  public getId() {
    return this.id;
  }
  public setId(id: string) {
    this.id = id;
  }

  public getTitle() {
    return this.title;
  }
  public setTitle(title: string) {
    this.title = title;
  }

  public getDescription() {
    return this.description;
  }
  public setDescription(description: string) {
    this.description = description;
  }

  public getImageUrl() {
    return this.imageUrl;
  }
  public setImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
  }
  public getPrice() {
    return this.price;
  }
  public setPrice(price: number) {
    this.price = price;
  }
}
