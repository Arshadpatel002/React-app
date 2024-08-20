import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, setPage, removePost } from './slices/PostSlice';
import { toggleForm } from './slices/feedbackSlice';
import PostCard from './components/PostCard';
import Pagination from './components/Pagination';
import FeedbackForm from './components/FeedbackForm';
import FormSidebar from './components/FormSidebar';
import Sidebar from './components/Sidebar';
import PostRow from './components/PostRow';

function App() {
  const dispatch = useDispatch();
  const { posts, currentPage, loading } = useSelector((state) => state.posts);
  const { formOpen } = useSelector((state) => state.feedback);
  const [viewToggle, setViewToggle] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleRemovePost = (id) => {
    dispatch(removePost(id));
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="flex">
      {/* Sidebar or FormSidebar based on state */}
      {formOpen ? (
        <FormSidebar />
      ) : (
        <Sidebar toggleForm={() => dispatch(toggleForm())} setViewToggle={setViewToggle} viewToggle={viewToggle} />
      )}

      {/* Main Content Area */}
      <div
        className={`flex-grow p-6 ${
           'ml-[300px]'
        }`}
      >
        {/* Display Loading or Cards */}
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            {/* Cards Layout */}
            {viewToggle ? <div className="grid grid-cols-1 gap-6">
              {currentPosts.map((post, index) => (
                <PostRow
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  onRemove={() => handleRemovePost(post.id)}
                  className={index % 2 === 0 ? 'col-span-full' : ''}
                />
              ))}
            </div>:
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPosts.map(post => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  onRemove={() => handleRemovePost(post.id)}
                />
              ))}
            </div>
            }

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPosts={posts.length}
              postsPerPage={postsPerPage}
            />
          </>
        )}
      </div>

      {/* Feedback Form Popup */}
      {formOpen && (
        <div
          className="fixed top-0 left-0 w-[550px] h-full bg-gray-100 z-50 "
          style={{ marginLeft: '300px' }} 
        >
          {/* Feedback Form */}
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => dispatch(toggleForm())}
          >
            &#10005; {/* Close button */}
          </button>
          <div className="p-6">
            <FeedbackForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
