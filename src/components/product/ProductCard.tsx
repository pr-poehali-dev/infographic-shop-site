import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-gray-100">
      <div className="aspect-[4/3] bg-gray-50 rounded-t-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900">
          {product.name}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div>
            <span className="text-sm font-medium text-gray-700">Размеры:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {product.sizes.map((size, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {size}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="font-medium text-gray-700">Давление:</span>
              <p className="text-gray-600">{product.pressure}</p>
            </div>
            <div>
              <span className="font-medium text-gray-700">Температура:</span>
              <p className="text-gray-600">{product.temperature}</p>
            </div>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-700">Материал:</span>
            <p className="text-sm text-gray-600">{product.material}</p>
          </div>
        </div>
        <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800">
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
