interface Props {
  params: { id: number; photoId: number };
}

const PhotoPage = ({ params: { photoId, id } }: Props) => {
  return (
    <div>
      User {id}, <br />
      Photo {photoId}
    </div>
  );
};

export default PhotoPage;
