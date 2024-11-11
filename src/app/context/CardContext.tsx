'use client';
import { createContext, useContext, ReactNode } from 'react';
import { Card } from '@/app/lib/definitions';
import { cardsData as cards} from '@/app/data/cards';

// Type Definition
interface CardContext {
	cards: Array<Card>,
}

// Context with a default value
const CardContext = createContext<CardContext | undefined>(undefined);

type CardContextProviderProps = {
	children: ReactNode;
};

// Provider component
const CardContextProvider = ({ children }: CardContextProviderProps) => {
	return (
	  <CardContext.Provider value={{ cards }}>
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

export { useCardContext, CardContextProvider };