import { Products } from './productModel.js';

const resolvers = {
    getProduct: async ({id}) => {
        try {
            const product = await Products.findById(id);
            return product;
        } catch (error) {
           throw new Error(error);
        }
    },   
    getAllProducts: async () => {
        try {
            const products = await Products.find({});
            return products;
        } catch (error) {
           throw new Error(error);
        }
    },
    createProduct: async ({input}) => {
        const newProduct = new Products({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            inventory: input.inventory,
            stores: input.stores,
        });

        newProduct.id = newProduct._id;
        
        try {
            const savedProduct = await newProduct.save();
            return savedProduct;
        } catch (error) {
            throw new Error(error);
        }
    },
    updateProduct: async ({ input}) => {   
        try {
                const updatedProduct =
                await Products.findOneAndUpdate(
                    {_id: input.id },
                    input, 
                    {new: true}
                );
                return updatedProduct;
            } catch (error) {
                throw new Error(error);
            }
    },
    deleteProduct: async ({ id }) => {
        try {
            await Products.deleteOne({_id: id});
            return 'Successfully deleted Product';
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default resolvers;