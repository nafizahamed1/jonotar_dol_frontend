import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

type News = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const ManageNews = () => {
const navigate = useNavigate(); 

const [newsList, setNewsList] = useState<News[]>([]);
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState<string>("");
const [editingId, setEditingId] = useState<number | null>(null);

  //  Image Upload 
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) return;

    if (editingId !== null) {
      setNewsList((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, title, description, image }
            : item
        )
      );
      setEditingId(null);
    } else {
      const newNews: News = {
        id: Date.now(),
        title,
        description,
        image,
      };
      setNewsList([...newsList, newNews]);
    }

    setTitle("");
    setDescription("");
    setImage("");
  };

  const handleEdit = (item: News) => {
    setTitle(item.title);
    setDescription(item.description);
    setImage(item.image);
    setEditingId(item.id);
  };

  const handleDelete = (id: number) => {
    setNewsList(newsList.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6 text-white">

        <button
        onClick={() => navigate("/admin")}
        className="absolute top-6 left-6 z-50 px-5 py-2.5 rounded-xl
        text-white font-medium
        bg-gradient-to-r from-green-600 to-red-600
        shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.7)]
        hover:scale-105 active:scale-95
        transition-all duration-300"
      >
        ← Back
      </button>


      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">News Management</h1>

        {/* FORM */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl mb-8 shadow-lg">

          <div className="space-y-4">

            <input
              type="text"
              placeholder="News Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white"
            />

            <textarea
              placeholder="News Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white"
            />

            {/* Image Upload */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full text-sm"
            />

            {/* Preview */}
            {image && (
              <img
                src={image}
                alt="preview"
                className="w-full h-48 object-cover rounded-lg"
              />
            )}

            <button
              onClick={handleSubmit}
              className="w-full py-3 rounded-lg font-semibold
              bg-gradient-to-r from-green-500 to-green-700
              hover:scale-105 transition"
            >
              {editingId ? "Update News" : "Add News"}
            </button>

          </div>

        </div>

        {/* LIST */}
        <div className="space-y-4">

          {newsList.length === 0 && (
            <p className="text-gray-400 text-center">No news available</p>
          )}

          {newsList.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white/10 border border-white/20"
            >

              {item.image && (
                <img
                  src={item.image}
                  className="w-full h-40 object-cover rounded mb-3"
                />
              )}

              <h2 className="text-xl font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-300 text-sm mb-4">
                {item.description}
              </p>

              <div className="flex gap-3">

                <button
                  onClick={() => handleEdit(item)}
                  className="px-4 py-2 bg-blue-600 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-4 py-2 bg-red-600 rounded"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default ManageNews;