export class Product {
  public id: number;
  public img: string;
  public sku: number;
  public title: string;
  public description: string;
  public availableSizes: Array<string>;
  public style: string;
  public price: number;
  public installments: number;
  public currencyId: string;
  public currencyFormat: string;
  public isFreeShipping: boolean;
}
