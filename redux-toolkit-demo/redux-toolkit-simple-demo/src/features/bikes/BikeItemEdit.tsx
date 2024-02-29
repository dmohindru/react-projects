import { useParams, useNavigate } from "react-router-dom";
import { useGetBikeByIdQuery, useUpdateBikeMutation } from "./BikeSlice";
import { ChangeEvent, useState, useEffect } from "react";

const BikeItemEdit: React.FC = () => {
  const { bikeId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetBikeByIdQuery(bikeId ?? "");
  const [updateBike] = useUpdateBikeMutation();

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [value, setValue] = useState(0);
  const [tyre, setTyre] = useState("");

  useEffect(() => {
    setMake(data?.make ?? "");
    setModel(data?.model ?? "");
    setValue(data?.value ?? 0);
    setTyre(data?.tyre ?? "");
  }, [data]);

  const onMakeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMake(e.target.value);

  const onModelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setModel(e.target.value);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(+e.target.value);

  const onTyreChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTyre(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateBike({
        id: bikeId,
        make: make,
        model: model,
        value: value,
        tyre: tyre,
      });
    } catch (err) {
      console.log("Failed to update bike", err);
    }
    setMake("");
    setModel("");
    setValue(0);
    setTyre("");
    navigate("/");
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h3>{`Editing Bike with id ${bikeId}`}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bikeMake">Make</label>
        <input type="text" id="bikeMake" value={make} onChange={onMakeChange} />
        <br />
        <label htmlFor="bikeModel">Model</label>
        <input
          type="text"
          id="bikeModel"
          value={model}
          onChange={onModelChange}
        />
        <br />
        <label htmlFor="bikeValue">Value</label>
        <input
          type="number"
          id="bikeValue"
          value={value}
          onChange={onValueChange}
        />
        <br />
        <label htmlFor="bikeType">Tyre</label>
        <input type="text" id="bikeType" value={tyre} onChange={onTyreChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BikeItemEdit;
