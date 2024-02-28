import { useParams, useNavigate } from "react-router-dom";
import { useGetCarByIdQuery, useUpdateCarMutation } from "./CarSlice";
import { ChangeEvent, useState, useEffect } from "react";

const CarItemEdit: React.FC = () => {
  const { carId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetCarByIdQuery(carId ?? "");
  const [updateCar] = useUpdateCarMutation();

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [value, setValue] = useState(0);
  const [engine, setEngine] = useState(0);

  useEffect(() => {
    setMake(data?.make ?? "");
    setModel(data?.model ?? "");
    setValue(data?.value ?? 0);
    setEngine(data?.engine ?? 0);
  }, [data]);

  const onMakeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMake(e.target.value);

  const onModelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setModel(e.target.value);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(+e.target.value);

  const onEngineChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEngine(+e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateCar({
        id: carId,
        make: make ?? "",
        model: model ?? "",
        value: value ?? 0,
        engine: engine ?? 0,
      }).unwrap();
    } catch (err) {
      console.log("Failed to update car", err);
    }
    setMake("");
    setModel("");
    setEngine(0);
    setValue(0);
    navigate("/");
  };

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <h3>{`Editing Car with id ${carId}`}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="carMake">Car Make</label>
        <input
          type="text"
          id="carMake"
          value={make}
          onChange={onMakeChange}
        ></input>
        <br />
        <label htmlFor="carModel">CarModel</label>
        <input
          type="text"
          id="carModel"
          value={model}
          onChange={onModelChange}
        />
        <br />
        <label htmlFor="carValue">Value</label>
        <input
          type="number"
          id="carValue"
          value={value}
          onChange={onValueChange}
        />
        <br />
        <label htmlFor="engineValue">Engine</label>
        <input
          type="number"
          id="engineValue"
          value={engine}
          onChange={onEngineChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
};

export default CarItemEdit;
