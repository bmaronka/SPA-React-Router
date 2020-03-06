import React from 'react';

import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: 'What is String Theory',
        author: 'John John',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium magnam, repellendus excepturi impedit libero, in numquam ipsum nemo autem perferendis dignissimos ut similique deserunt pariatur corporis. Neque, fuga repellendus. Sapiente.',
    },
    {
        id: 2,
        title: 'What is Fermi Paradox',
        author: 'Mary Mary',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium magnam, repellendus excepturi impedit libero, in numquam ipsum nemo autem perferendis dignissimos ut similique deserunt pariatur corporis. Neque, fuga repellendus. Sapiente.',
    },
    {
        id: 3,
        title: 'What is Dark Matter',
        author: 'Glen Glen',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium magnam, repellendus excepturi impedit libero, in numquam ipsum nemo autem perferendis dignissimos ut similique deserunt pariatur corporis. Neque, fuga repellendus. Sapiente.',
    },
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;