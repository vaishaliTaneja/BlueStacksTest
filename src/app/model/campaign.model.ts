

export class Campaign {
  public name: string;
  public date: Date;
  public type: string;

  constructor(name: string, date: Date, type: string) {
    this.name = name;
    this.date = date;
    this.type = type;
  }
}
