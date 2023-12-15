import { connect } from 'react-redux'

const BookDetail = (props) => {
  const {selectedBook} = props;
console.log(selectedBook)
  return (
    <div className='mt-20'>
      <div className='flex justify-center mb-1'>
      <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt={`${selectedBook.title} cover`} />
      </div>
      <div className='text-[12px] font-bold text-center'>
      <h3 className='text-center w-full'>Title: {selectedBook.volumeInfo.title}</h3>
      <p className='text-center w-full'>Author: {selectedBook.volumeInfo.authors.join()}</p>
      {selectedBook.volumeInfo.averageRating &&
        <p className='text-center w-full'>Rating: {selectedBook.volumeInfo.averageRating}</p>}
        </div>
    </div>
  )
}


const mapStateToProps = ({selectedBook }) => {
  return {
    selectedBook
  };
};

const mapDispatchToProps = {
  // updateAction
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
