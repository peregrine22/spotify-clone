import Stripe from 'stripe';

export type UserDetails = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  avatar: {
    url: string;
  };
  billingAddress?: Stripe.Address;
  paymentMethod?: Stripe.PaymentMethod;
};

export type Product = {
  id: string;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Stripe.Metadata;
};

export type Price = {
  id: string;
  productId: string;
  active?: boolean;
  unitAmount?: number;
  currency?: string;
  type?: Stripe.Price.Type;
  interval?: Stripe.Price.Recurring.Interval;
  intervalCount?: number;
  trialPeriodDays?: number | null;
  metadata?: Stripe.Metadata;
  products?: Product;
};

export type Subscription = {
  id: string;
  userId: string;
  status?: Stripe.Subscription.Status;
  metadata?: Stripe.Metadata;
  priceId?: string;
  quantity?: number;
  cancelAtPeriodEnd?: boolean;
  create: string;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  endedAt?: string;
  cancelAt?: string;
  canceledAt?: string;
  trialStart?: string;
  trialEnd?: string;
  prices?: Price;
};

export type Song = {
  id: string;
  userId: string;
  author: string;
  gemre: string;
  title: string;
  songPath: string;
  imagePath: string;
};
