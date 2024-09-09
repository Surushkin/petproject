// src/Greeting.tsx
import React from 'react';

// Определение интерфейса для пропсов компонента
interface GreetingProps {
  name: string;
}

// Компонент приветствия

export const Greeting: React.FC<GreetingProps> = ({ name }) => { 
    
  return (
    <div>
      <h1>Привет, {name}!</h1>
    </div>
  );
};

