import InfiniteScroll from 'react-infinite-scroll-component';

export default function ReelsPage() {
    const items = [
        'Taha',
        'Bhai',
        'Taha',
        'Bhai',
        'Taha',
        'Bhai',
        'Taha',
        'Bhai',
        'Taha',
        'Bhai',
        'Taha',
        'Bhai',
        'Taha',
        'Bhai',
        'Taha',
        'Bhai',
        'Taha',
        'Bhai',
        'Taha',
        'Bhai',
        'Taha',
        'Bhai',
        'Taha',
        'Bhai',
        'Taha',
        'Bhai',
    ]

    function fetchData() {
        console.log("fetched")
    }

    return (
        <>
            <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                refresh = {() => console.log("refreshing")}
                // below props only if you need pull down functionality
                refreshFunction={this.refresh}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                }
            >
                {items}
            </InfiniteScroll>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere quidem repudiandae corporis eligendi quas impedit perspiciatis. Ipsa voluptas quibusdam obcaecati perspiciatis laboriosam explicabo ut quasi eveniet, rerum hic, praesentium fugiat aliquam, ipsam est corrupti eum natus? Laboriosam illum sunt debitis eos cupiditate ab, nulla eaque harum corrupti qui a porro magnam, dolor eius tempore numquam inventore impedit eum molestiae facilis quasi ad? Eum culpa consequatur ratione ab similique eligendi. Beatae maxime assumenda suscipit quidem, aspernatur quasi? Totam itaque voluptates odit molestias! Autem repellat, dicta iste quas eveniet molestias voluptas. Nemo, accusantium? Nobis ad rerum odio, nostrum doloribus possimus libero.
        </>
    )
}