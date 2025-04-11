import Header from "../../components/header";
import Dashboard from "../../components/dashboard";
import { useState } from "react";
import { message, Upload } from "antd";
import { MdUpload } from "react-icons/md";
import ReactPlayer from "react-player";
import {
  useUpdateThumbnailMutation,
  useUpdateVideoMutation,
  useUploadVideoMutation,
} from "../../redux/features/video";
import { useNavigate } from "react-router-dom";

const VideoUploadPage = () => {
  const navigate = useNavigate();

  const [isVideoUploaded, setIsVideoUploaded] = useState(!true);
  const { Dragger } = Upload;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoURL, setVideoURL] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const handleFileChange = (info) => {
    const file = info.fileList[0];
    setVideoFile(file.originFileObj);

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setVideoURL(reader.result);
    };
    reader.readAsDataURL(file.originFileObj);
    setIsVideoUploaded(true);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setThumbnail(selectedImage);
  };

  const categories = [
    "All",
    "Trending",
    "Live",
    "Gaming",
    "Music",
    "Travel",
    "Sports",
    "Animation",
    "Game play",
    "Streaming",
    "Camping",
    "Cast",
  ];

  const [uploadVideo] = useUploadVideoMutation();
  const [updateVideo] = useUpdateVideoMutation();
  const [updateThumbnail] = useUpdateThumbnailMutation();

  const submitVideo = () => {
    uploadVideo({
      title,
      description,
      category,
      channel: "65d3973fd54dc714edd7b369",
    })
      .unwrap()
      .then((res) => {
        if (res.success) {
          const videoFormData = new FormData();
          videoFormData.append("id", res.video._id);
          videoFormData.append("video", videoFile);

          const thumbnailFormData = new FormData();
          thumbnailFormData.append("id", res.video._id);
          thumbnailFormData.append("thumbnail", thumbnail);

          updateVideo(videoFormData);
          updateThumbnail(thumbnailFormData);

          message.success("Video uploaded successfully");
          // navigate("/");
        } else {
          message.error("Failed to upload video");
        }
      });
  };

  return (
    <div className="bg-black-false pb-20 min-h-screen">
      <div className="max-w-screen-xl m-auto">
        <Header />
        <div className="px-4">
          {/* Main  */}
          <div className="flex justify-between relative top-[72px]">
            <div className="!w-[14%]">
              <Dashboard />
            </div>
            <div className="w-[86%]">
              {/* <Modal closable={false} centered width={700} open={true} title={<span className="text-[25px] font-bold">Upload Video</span>} footer={false}>
                             
                            </Modal> */}
              <div className="h-[93vh] flex justify-center items-center">
                <div className="flex justify-center items-center bg-white w-full rounded-lg p-10 !text-black">
                  {!isVideoUploaded && (
                    <div className="w-full  h-full">
                      <Dragger
                        accept="video/*"
                        height={"100%"}
                        multiple={false}
                        onChange={handleFileChange}
                      >
                        <p className=" flex justify-center items-center">
                          <MdUpload size={60} />
                        </p>
                        <p className="ant-upload-text">
                          Drag and drop video files to upload
                        </p>
                        <p className="ant-upload-hint">
                          Your videos will be private until you publish them.
                        </p>
                        <button className="bg-custom-purple text-white py-2 px-2 mt-6">
                          Select Files
                        </button>
                      </Dragger>
                    </div>
                  )}
                  {isVideoUploaded && (
                    <div className="h-full w-full mt-4">
                      <div className="grid grid-cols-5 mt-4">
                        <div className="col-span-3">
                          <div className="flex justify-between">
                            <h2 className="font-bold text-[20px]">Details</h2>
                            {/* <button className="text-custom-purple uppercase">Reuse Details</button> */}
                          </div>
                          <div class="relative mt-2">
                            <textarea
                              onChange={(e) => setTitle(e.target.value)}
                              value={title}
                              type="text"
                              id="details"
                              rows={2}
                              className=" w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                              placeholder="  "
                            />
                            <label
                              for="details"
                              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[20px] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 "
                            >
                              Title (required)
                            </label>
                          </div>
                          <div class="relative mt-2">
                            <textarea
                              onChange={(e) => setDescription(e.target.value)}
                              value={description}
                              type="text"
                              id="description"
                              rows={6}
                              className=" w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                              placeholder="  "
                            />
                            <label
                              for="description"
                              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[20px] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 "
                            >
                              Description
                            </label>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="relative top-10 pl-4">
                            <ReactPlayer
                              height={150}
                              width={"100%"}
                              playing
                              url={videoURL}
                            />
                            <p className="text-[13px]">
                              {title ? title : "Title goes here...!"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <select onChange={(e) => setCategory(e.target.value)}>
                          <option defaultChecked value="">
                            Choose Category
                          </option>
                          {categories.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-[15px] font-bold">Thumbnail</h3>
                        <p className="text-[13px]">
                          Select a picture that shows what's in your video, A
                          good thumbnail stands out and draw viewer's attention
                        </p>
                        <input
                          type="file"
                          className="mt-1"
                          onChange={handleImageChange}
                        />
                      </div>
                      <br />
                      <button onClick={submitVideo}>Submit</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUploadPage;
