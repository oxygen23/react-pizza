import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox='0 0 280 460'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='140' cy='130' r='130' />
      <rect x='0' y='275' rx='6' ry='6' width='280' height='27' />
      <rect x='-1' y='315' rx='6' ry='6' width='280' height='84' />
      <rect x='1' y='421' rx='6' ry='6' width='63' height='33' />
      <rect x='137' y='410' rx='20' ry='20' width='140' height='45' />
    </ContentLoader>
  );
}

export default LoadingBlock;
