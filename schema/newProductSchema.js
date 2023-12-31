import * as Yup from "yup";

export const newProductSchema = Yup.object().shape({
    title: Yup.string().min(3, "Title must be at least 3 characters").required("Title is required"),
    desc: Yup.string().min(10, "Description must be at least 10 characters").required("Description is required"),
    categoryId: Yup.string().required("Category is required"),
    prices: Yup.array()
        .of(Yup.number().min(1, "Price must be at least 1").required("Price is required"))
        .required("Prices are required"),
    extraOptions: Yup.array()
        .min(1, "Extra must be at least 1")
        .of(
            Yup.object().shape({
                text: Yup.string().required("Text is required"),
                price: Yup.number().min(1, "Price must be at least 0").required("Price is required"),
            })
        ),
});
