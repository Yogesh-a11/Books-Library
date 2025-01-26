interface Book {
    id: number
    title: string; 
    author: string; 
    genre: string; 
    rating: number; 
    totalCopies: number; 
    availableCopies: number; 
    description: string; 
    coverColor: string; 
    coverUrl: string;
    video: string;
    summary: string;
    isLoanedBook?: boolean
}

interface AuthCredentials {
    email: string;
    password: string;
    fullName: string;
    universityId: number;
    universityCard: string;
}
interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    rating: number;
    totalCopies: number;
    availableCopies: number;
    description: string;
    coverColor: string;
    coverUrl: string;
    videoUrl: string;
    summary: string;
    createdAt: Date | null;
  }