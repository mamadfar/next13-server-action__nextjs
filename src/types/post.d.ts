interface IDocumentResult<D> {
    _doc: D
}

interface IPost extends IDocumentResult<IPost>{
    _id?: string | object;
    title: string;
    image: string;
}