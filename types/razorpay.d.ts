export {};

declare global {
  interface Window {
    Razorpay: any; // or use RazorpayOptions if you define full types
  }
}
