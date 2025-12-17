export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'antipasti' | 'primi' | 'secondi' | 'dolci' | 'bevande';
  image?: string;
  casher: boolean;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message?: string;
}
