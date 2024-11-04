import React from "react";
import { useTranslation } from "react-i18next";

const Blogs = () => {
  const { t, i18n } = useTranslation();

  const blogPosts = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      authorImageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      authorName: t("home.blogPosts.cards.0.authorName"),
      authorTitle: t("home.blogPosts.cards.0.authorTitle"),
      title: t("home.blogPosts.cards.0.title"),
      description: t("home.blogPosts.cards.0.description"),
      readMoreLink: "#",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      authorImageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      authorName: t("home.blogPosts.cards.1.authorName"),
      authorTitle: t("home.blogPosts.cards.1.authorTitle"),
      title: t("home.blogPosts.cards.1.title"),
      description: t("home.blogPosts.cards.1.description"),
      readMoreLink: "#",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      authorImageUrl:
        "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      authorName: t("home.blogPosts.cards.2.authorName"),
      authorTitle: t("home.blogPosts.cards.2.authorTitle"),
      title: t("home.blogPosts.cards.2.title"),
      description: t("home.blogPosts.cards.2.description"),
      readMoreLink: "#",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="md:text-4xl text-xl font-bold center-title text-gray-800 capitalize lg:text-3xl ">
          {t("home.blogPosts.heading")}
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-gray-500">
          {t("home.blogPosts.subHeading")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="shadow-md transition-all transform hover:translate-y-[-10px] hover:shadow-2xl duration-300 ease-in-out p-4 rounded-lg"
            >
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src={post.imageUrl}
                  alt=""
                />
                <div className="absolute bottom-0 flex p-3 bg-white">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src={post.authorImageUrl}
                    alt=""
                  />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700">{post.authorName}</h1>
                    <p className="text-sm text-gray-500">{post.authorTitle}</p>
                  </div>
                </div>
              </div>
              <h1 className="mt-6 text-xl font-semibold text-gray-800">
                {post.title}
              </h1>
              <hr className="w-32 my-6 text-custom-red" />
              <p className="text-sm text-gray-500">{post.description}</p>
              <a
                href={post.readMoreLink}
                className="inline-block mt-4 text-custom-red underline hover:text-red-400"
              >
              { t("home.blogPosts.readMoreLink")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
