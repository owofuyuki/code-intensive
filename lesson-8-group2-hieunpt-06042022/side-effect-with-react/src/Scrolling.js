import { useEffect, useState } from 'react';

const Scrolling = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [count, setCount] = useState(2);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        console.log("Scroll Effect");
        const handleScrolling = () => {
            setScrollTop(document.documentElement.scrollTop);
        };
        document.addEventListener("scroll", handleScrolling);
        return () => {
            // Cleanup được chạy khi component được update và nó sẽ xoá cái effect cũ đi
            console.log("Scroll Cleanup");
            document.removeEventListener("scroll", handleScrolling);
        };
    }, []);

    useEffect(() => {
        console.log("Counting Effect")
        document.title = `You have click ${count} times!`;
    }, [count]);

    // Sử dụng array [count] để effect chỉ chạy khi thay đổi tham số count

    // Có thể có nhiều hơn 1 efect trong 1 component

    return (
        <div style={{marginTop: 16, fontSize: 32}}>
            Scrolling {scrollTop} <br />
            <div>
                <button onClick={() => {setVisible(!visible)}}>Change visible</button>
                {visible && <p style={{margin: 16, fontSize: 16}}>This is a hidden content</p>}
            </div>
            <div style={{margin: 16, fontSize: 16}}>
                Count: {count} {" "} <br />
                <button 
                    style={{marginTop: 16}}
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    Increase
                </button>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius vel pharetra vel turpis nunc. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Feugiat in ante metus dictum. Eu augue ut lectus arcu bibendum at varius. Habitant morbi tristique senectus et netus et malesuada fames ac. Faucibus turpis in eu mi bibendum neque egestas. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Natoque penatibus et magnis dis. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Eu consequat ac felis donec et odio. Augue lacus viverra vitae congue eu consequat ac felis. Proin libero nunc consequat interdum varius sit amet. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Dignissim cras tincidunt lobortis feugiat vivamus at. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Pharetra magna ac placerat vestibulum. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Metus aliquam eleifend mi in nulla posuere. Vulputate enim nulla aliquet porttitor lacus. 
            Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ridiculus mus mauris vitae ultricies leo. Aliquam nulla facilisi cras fermentum odio eu feugiat. Nunc sed id semper risus in hendrerit gravida. Molestie a iaculis at erat pellentesque adipiscing commodo. In ornare quam viverra orci sagittis. Nunc sed id semper risus in hendrerit. At erat pellentesque adipiscing commodo elit at. Massa sapien faucibus et molestie. Et tortor consequat id porta nibh venenatis cras sed. Dignissim sodales ut eu sem integer vitae justo eget magna. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Egestas pretium aenean pharetra magna. Et magnis dis parturient montes nascetur ridiculus. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sit amet porttitor eget dolor morbi non arcu risus quis. Amet nulla facilisi morbi tempus iaculis urna id.
            Diam vulputate ut pharetra sit amet aliquam id. Leo in vitae turpis massa sed elementum. Quis blandit turpis cursus in hac. Quisque egestas diam in arcu cursus euismod. Libero volutpat sed cras ornare arcu. Aenean sed adipiscing diam donec. Sit amet tellus cras adipiscing enim eu. Eget nullam non nisi est sit. Nibh venenatis cras sed felis eget velit aliquet. Pellentesque habitant morbi tristique senectus et. Sed viverra tellus in hac habitasse platea. Venenatis tellus in metus vulputate eu scelerisque felis. Ante metus dictum at tempor commodo ullamcorper a. Rhoncus mattis rhoncus urna neque viverra justo nec. Nunc non blandit massa enim.
            Sollicitudin nibh sit amet commodo nulla facilisi. Enim facilisis gravida neque convallis a cras semper auctor neque. Est placerat in egestas erat imperdiet sed euismod nisi. Risus pretium quam vulputate dignissim suspendisse in est ante in. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Aliquet risus feugiat in ante metus. Sed risus ultricies tristique nulla aliquet enim. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Vel pretium lectus quam id leo in vitae. Orci sagittis eu volutpat odio facilisis mauris sit. Ut venenatis tellus in metus vulputate eu scelerisque. Egestas sed tempus urna et pharetra pharetra. Dictum at tempor commodo ullamcorper a lacus. Malesuada pellentesque elit eget gravida cum sociis natoque. Nunc faucibus a pellentesque sit. Integer malesuada nunc vel risus commodo viverra maecenas. Urna neque viverra justo nec ultrices dui sapien. Vitae turpis massa sed elementum tempus.
            Lobortis elementum nibh tellus molestie nunc non blandit massa. Sagittis vitae et leo duis ut diam quam nulla. Et ligula ullamcorper malesuada proin. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Elit eget gravida cum sociis natoque. Ullamcorper sit amet risus nullam eget felis eget nunc. Urna id volutpat lacus laoreet non curabitur gravida. Et ultrices neque ornare aenean euismod elementum nisi quis. Rutrum quisque non tellus orci ac auctor. Accumsan tortor posuere ac ut consequat semper viverra. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.
            Sed egestas egestas fringilla phasellus faucibus scelerisque. Ut faucibus pulvinar elementum integer enim neque volutpat. Tincidunt ornare massa eget egestas purus viverra accumsan. Id velit ut tortor pretium viverra suspendisse. Magna ac placerat vestibulum lectus. Lobortis elementum nibh tellus molestie nunc non. Cras fermentum odio eu feugiat. In fermentum et sollicitudin ac orci phasellus. Risus nec feugiat in fermentum posuere urna. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Ut diam quam nulla porttitor. Non arcu risus quis varius quam quisque. Id aliquet lectus proin nibh nisl condimentum id venenatis. Quam quisque id diam vel quam elementum pulvinar etiam.
            Nisl purus in mollis nunc sed id semper risus in. Risus nec feugiat in fermentum posuere urna nec tincidunt. Lacus sed viverra tellus in hac. Ipsum dolor sit amet consectetur adipiscing. Nisl pretium fusce id velit ut tortor. Mattis ullamcorper velit sed ullamcorper. Phasellus egestas tellus rutrum tellus. Congue quisque egestas diam in arcu. Ullamcorper sit amet risus nullam eget felis. Lacus laoreet non curabitur gravida arcu ac tortor. Tempus iaculis urna id volutpat lacus laoreet non. Turpis in eu mi bibendum neque. Velit laoreet id donec ultrices tincidunt arcu non sodales. Urna nec tincidunt praesent semper feugiat nibh. Tortor pretium viverra suspendisse potenti nullam. Nibh sit amet commodo nulla facilisi nullam. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Morbi tristique senectus et netus et malesuada. Vitae et leo duis ut.
            Convallis aenean et tortor at. Condimentum lacinia quis vel eros donec ac odio tempor. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Interdum varius sit amet mattis vulputate. Elit eget gravida cum sociis natoque penatibus et magnis. Nunc non blandit massa enim nec dui. Nisi scelerisque eu ultrices vitae auctor eu. Pellentesque diam volutpat commodo sed egestas egestas fringilla. In metus vulputate eu scelerisque. Purus in massa tempor nec feugiat. Neque sodales ut etiam sit. Placerat in egestas erat imperdiet sed euismod nisi. Ipsum a arcu cursus vitae congue mauris. Scelerisque viverra mauris in aliquam sem. Ut eu sem integer vitae. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.
            Aliquam id diam maecenas ultricies mi. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Semper eget duis at tellus at. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Risus commodo viverra maecenas accumsan. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Pellentesque habitant morbi tristique senectus et netus. Ac turpis egestas maecenas pharetra convallis posuere. Gravida neque convallis a cras semper auctor neque. Pulvinar neque laoreet suspendisse interdum consectetur. Vehicula ipsum a arcu cursus vitae congue. Sed ullamcorper morbi tincidunt ornare massa. Amet facilisis magna etiam tempor. Dictum varius duis at consectetur lorem.
            Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Duis ut diam quam nulla. Praesent tristique magna sit amet purus gravida quis blandit. Mollis nunc sed id semper risus in hendrerit. Diam sollicitudin tempor id eu nisl nunc mi. Sit amet porttitor eget dolor. Pellentesque habitant morbi tristique senectus et netus. Ullamcorper a lacus vestibulum sed arcu non odio. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Gravida dictum fusce ut placerat orci nulla pellentesque. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Amet cursus sit amet dictum sit amet justo. Nisi porta lorem mollis aliquam ut. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra.
        </div>
    );
};                                                                                                                                           

export default Scrolling;