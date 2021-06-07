import { useRouter } from 'next/router';

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? '#26CD86' : 'black',
    fontFamily: 'Raleway',
    fontSize: 18,
    fontWeight: 700,
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

export default ActiveLink;
