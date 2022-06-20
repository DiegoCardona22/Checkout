export type OrderType = {
  order_id: number;
  buy: {
    data: {
      quantity: {
        hex: string;
        type: string;
      };
      token_address?: string;
      token_id?: string;
      properties?: {
        name: string;
        image_url: string;
        collection: {
          name: string;
        }
      };
    }
    type: string;
  },
  sell: {
    data: {
      id: string;
      properties: {
        name: string;
        image_url: string;
        collection: {
          name: string;
        }
      };
      quantity: {
        hex: string;
        type: string;
      };
      token_address: string;
      token_id: string;
    }
    type: string;
  },
  fees: {
    type: string,
    address: string,
    token: {
      type: string,
      data: {
        decimals: number
      }
    },
    amount: string
  }[],
  feePercentage: number,
  metaData?: {
    description?: string;
    metadata?: object;
    name? : string;
  }
};
