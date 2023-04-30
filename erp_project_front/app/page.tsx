// app/page.tsx
import ProductForm from '../components/ProductForm';

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-8">Adicionar Produto</h1>
        <ProductForm />
      </div>
    </div>
  );
};

export default Page;
