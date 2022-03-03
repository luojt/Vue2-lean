import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Project from "@/views/Project";
import Message from "@/views/Message";
import BlogDetail from "@/views/Blog/Detail";

export default [{
		name: "Home",
		path: "/",
		component: Home
	},
	{
		name: "About",
		path: "/about",
		component: About
	},
	//博客列表
	{
		name: "Blog",
		path: "/article",
		component: Blog
	},
	//博客分类
	{
		name: "CategoryBlog",
		path: "/article/cate/:categoryId",
		component: Blog
	},
	//博客文章详情
	{
		name: "BlogDetail",
		path: "/article/:id",
		component: BlogDetail
	},
	{
		name: "Project",
		path: "/project",
		component: Project
	},
	{
		name: "Message",
		path: "/message",
		component: Message
	},
];
