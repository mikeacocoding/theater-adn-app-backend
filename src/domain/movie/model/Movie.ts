export default class Movie {
  private id: string;
  private title: string;
  private description: string;
  private imageUrl: string;

  constructor(
    id: string,
    title: string,
    description: string,
    imageUrl: string,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
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
}
