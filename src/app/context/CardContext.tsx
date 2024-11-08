'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { Card } from '@/app/lib/definitions';
import { cardsData as cards} from '@/app/data/cards';

// Type Definition
interface CardContext {
	cards: Array<Card>,
	modalStatus: boolean,
	setModalStatus: (status: boolean) => void; // Define setModalStatus type explicitly
	selectedCard: Card | null;
	setSelectedCard: (card: Card | null) => void;
}

// Context with a default value
const CardContext = createContext<CardContext | undefined>(undefined);

type CardContextProviderProps = {
	children: ReactNode;
};

// Provider component
const CardContextProvider = ({ children }: CardContextProviderProps) => {
	
	const [selectedCard, setSelectedCard] = useState<Card | null>(null);
	const [modalStatus, setModalStatus ] = useState(false);
	
  
	return (
	  <CardContext.Provider value={{ cards, selectedCard, setSelectedCard, modalStatus, setModalStatus }}>
		{children}
	  </CardContext.Provider>
	);
};

// custom hook to use the context.
const useCardContext = (): CardContext => {
	const context = useContext(CardContext);
	if (!context) {
	  throw new Error('useMyContext must be used within a MyContextProvider');
	}
	return context;
};

export { CardContextProvider, useCardContext };