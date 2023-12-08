import React from 'react';
import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../Services/article';
import axios from 'axios';
import { store } from '../Services/store';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  const [allArticles, setAllArticles] = useState([]);
  const [showArticles, setShowArticles] = useState(false);
  const [writtenText, setWrittenText] = useState('');

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        'https://ai-summarizer-b2b63-default-rtdb.europe-west1.firebasedatabase.app/articles.json'
      );

      const dataFetched = response.data;
      setAllArticles(Object.values(dataFetched)); // Assuming data is an object, convert it to an array
      console.log(allArticles);
    } catch (error) {
      console.error('Error Fetching Articles: ', error);
    }
  };

  const addArticle = async (newArticle) => {
    try {
      const response = await axios.post(
        'https://ai-summarizer-b2b63-default-rtdb.europe-west1.firebasedatabase.app/articles.json',
        newArticle
      );
      // .then((response) => console.log('response is: '));
      const data = response.data;
      console.log('Article Added: ', data);
    } catch (error) {
      console.error('Error Adding Article: ', error);
    }
  };

  const removeArticle = (index) => {
    const updatedArticles = [...allArticles];
    updatedArticles.splice(index, 1);
    setAllArticles(updatedArticles);

    localStorage.setItem('articles', JSON.stringify(updatedArticles));
  };

  const handleArticleClick = (item) => {
    setArticle(item);
  };

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    fetchArticles();

    // console.log(articlesFromLocalStorage);
    // if (articlesFromLocalStorage) {
    //   setAllArticles(articlesFromLocalStorage);
    // }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    console.log('The Fetched Data is: ', data);

    if (data?.summary) {
      const newArticle = {
        ...article,
        summary: data.summary,
      };

      console.log('New Article is: ', newArticle);

      const updatedArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedArticles);

      addArticle(newArticle);
      setWrittenText(article.url);
      // localStorage.setItem('articles', JSON.stringify(updatedArticles));
    }
  };

  return (
    <section className='mt-16 w-full max-w-xl '>
      {/* Search */}
      <div className='flex flex-col w-full gap-2 '>
        <form
          className='relative flex justify-center items-center '
          onSubmit={handleSubmit}>
          <img
            src={linkIcon}
            alt='link_icon'
            className='absolute left-0 my-2 ml-3 w-5'
          />
          <input
            type='url'
            placeholder='Enter a URL'
            value={article.url}
            onChange={(e) => {
              setArticle({
                ...article,
                url: e.target.value,
              });
            }}
            required
            className='url_input peer'
          />

          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
            GO
          </button>
        </form>

        {/* Browse URL History */}

        <div className='flex flex-col gap-1 max-h-60 overflow-auto relative'>
          <button
            onClick={() => setShowArticles(!showArticles)}
            className='black_btn w-fit mx-auto'>
            {showArticles ? 'Hide Articles' : 'Show Articles'}
          </button>
          {showArticles && (
            <>
              {allArticles.length === 0 ? (
                <div>
                  <p> No Articles available right now.</p>
                </div>
              ) : (
                allArticles.map((item, index) => {
                  return (
                    <div
                      key={`link-${index}`}
                      onClick={() => setArticle(item)}
                      className='link_card'>
                      <div className='copy_btn'>
                        <img
                          src={copy}
                          alt='copy_icon'
                          className='w-[100%] h-[100%]'
                        />
                      </div>
                      <p className='flex font-satoshi text-blue-700 font-medium text-sm truncate '>
                        {item.url}
                      </p>
                      <button
                        onClick={() => removeArticle(index)}
                        className='absolute right-0 my-1.5 mr-1.5 p-1.5 flex items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 hover:border-gray-700 hover:text-gray-700 w-fit'>
                        Remove
                      </button>
                    </div>
                  );
                })
              )}
            </>
          )}
        </div>
      </div>

      {/* Display Result */}

      <div className='summary_box'>
        <p>{writtenText ? `you wrote: ${writtenText}` : ''}</p>
      </div>

      <div className='my-10 max-w-full flex justify-center items-center '>
        {isFetching ? (
          <div className='flex-col gap-7 justify-center items-center'>
            <img
              src={loader}
              alt='loader'
              className='w-10 h-10 object-contain mx-auto mb-3'
            />
            <p>Searching for your URL, Please wait... :D</p>
          </div>
        ) : error ? (
          <p className='font-inter font-bold text-black text-center '>
            Well, that wasn't suppose to happens... <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          <div className='flex flex-col gap-3'>
            <h2 className='font-satoshi font-bold text-gray-600 text-xl '>
              Article <span className='blue_gradient'>Summary</span>
            </h2>
            <div className='summary_box'>
              <p className='font-medium font-satoshi'>
                {article.summary
                  ? article.summary
                  : `You haven't Search for anything`}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
