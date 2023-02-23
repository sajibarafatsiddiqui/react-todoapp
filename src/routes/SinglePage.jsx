import { useParams } from 'react-router-dom';

const aboutdata = [
  {
    slug: 'about-app',
    title: 'This is a React TodoList App',
    description:
      'In this app we have tried to cover as many react features as possible',
  },
  {
    slug: 'about-developer',
    title: 'This is Sajib Arafat Siddiqui',
    description: 'I am working on creating UI using react js.',
  },
];

const SinglePage = () => {
  const { slug } = useParams();
  console.log(useParams());
  const content = aboutdata.find((data) => data.slug === slug);
  const { title, description } = content;

  return (
    <div className="main_content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SinglePage;
