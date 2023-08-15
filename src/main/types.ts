import Stripe from 'stripe';

export interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  avatar: {
    url: string;
  };
  billingAddress?: Stripe.Address;
  paymentMethod?: Stripe.PaymentMethod;
}

export interface Product {
  id: string;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Stripe.Metadata;
}

export interface Price {
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
}
export interface Subscription {
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
}
