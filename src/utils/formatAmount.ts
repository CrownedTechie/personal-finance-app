export const formattedAmount = (amount: number, currency: string = "USD") => {
  return new Intl.NumberFormat("en-US", { 
    style: "currency", 
    currency 
  }).format(amount);
};