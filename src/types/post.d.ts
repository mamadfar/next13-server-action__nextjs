interface IDocumentResult<D> {
    _doc?: D
}

interface IPost extends IDocumentResult<IPost>{
    _id?: string;
    title?: string;
    image?: string;
}