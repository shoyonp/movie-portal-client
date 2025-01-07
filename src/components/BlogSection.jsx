import { motion } from "framer-motion";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Upcoming Movies of 2025",
      description:
        "Get a sneak peek into the most anticipated movies releasing this year.",
      image: "https://i.ibb.co.com/58DRx65/most-anticipated-movies.webp",
      link: "https://www.imdb.com/list/ls579577759/",
    },
    {
      id: 2,
      title: "Behind the Scenes: Deadpool vs. Wolverine",
      description:
        "A deep dive into the making of this epic showdown between two fan favorites.",
      image:
        "https://i.ibb.co.com/0XyW9PY/behind-the-scenes-of-the-finale-of-deadpool-wolverine-v0-89gq3xxiw9hd1.webp",
      link: "https://www.google.com/search?sca_esv=6657760cec095773&sxsrf=ADLYWIK5-bHxpsu2oZFychZpc11P2qnGYA:1736230900021&q=Behind+the+Scenes:+Deadpool+vs.+Wolverine&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3JyJJclJuzBPl12qJyPx7ESKd_0oka9aLy7VkmZpoP843kNAVevDqXFY_DxGDpakB32U8Jx4v_tbpHYaYX4-1vWL5qkJbkTj1GgzDmjLqTKgVowag8ZhkZDwhvb3yDtIRrnVQP4w&sa=X&ved=2ahUKEwizw6yQ_OKKAxXJqFYBHTa3L0AQ0pQJegQIFBAB&biw=852&bih=811&dpr=1.13",
    },
    {
      id: 3,
      title: "Why Dark Themes Are Taking Over",
      description:
        "Explore why dark themes dominate modern movie websites and apps.",
      image:
        "https://i.ibb.co.com/2gNnD2v/jasperart-2022-11-14-07-41-54-upscaled.jpg",
      link: "https://movieweb.com/movies-too-dark-explained/#:~:text=That%20movies%20are%20exploring%20dark,brighter%20predecessors%20simply%20never%20did.",
    },
  ];

  return (
    <section className=" text-white py-16 px-4 w-11/12 mx-auto ">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Latest Articles</h2>
        <p className="mt-3 text-gray-400">
          Dive into the latest trends, updates, and behind-the-scenes stories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.10, delay: blog.id * 0.2 }}
            className="bg-[#202020] rounded-lg shadow-lg overflow-hidden group"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold group-hover:text-[#FFD700] transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="mt-3 text-gray-400">{blog.description}</p>
              <a
                href={blog.link}
                className="inline-block mt-5 bg-[#D72638] text-white px-5 py-2 rounded hover:bg-[#E63946] transition-transform transform hover:scale-105"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
