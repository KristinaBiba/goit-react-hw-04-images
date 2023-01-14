import { ColorRing } from  'react-loader-spinner'

export const Loader = () => {
  return (<div className='loader'>
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#1034a6', '#56a0d3', '#b0c8ed', 'c1f9ff', '#a2bdee']}
/></div>)
}
