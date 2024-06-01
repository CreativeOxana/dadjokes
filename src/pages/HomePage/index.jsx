import React from 'react';
import { Joke } from '../../components/Joke';
import './style.css';

const api = await fetch('http://localhost:4002/api/jokes');
const response = await api.json();
const jokes = response.data;

export const HomePage = () => {
  return (
    <div className="container">
      {jokes.map((joke) => {
        return (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        );
      })}
    </div>
  );
};
