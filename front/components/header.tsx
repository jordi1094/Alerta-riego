import AddPlantForm from "./add-plant-form";

export default function Header() {
  return (
    <div className="flex justify-between md:py-7 md:px-8">
      <h1>Hoouse Name</h1>
      <AddPlantForm />
    </div>
    
  );
}
