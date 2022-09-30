import { Tabs } from '@mantine/core';
import { BiInfoCircle, BiDetail,BiStar  } from 'react-icons/bi';
import Additional from '../Puoduct/Additional';
import Description from '../Puoduct/Description';
import Reviews from '../Puoduct/Reviews';

const ProductMoreInfo = () => {
    return (
        <div className="py-12 bg-white">
            <div className="container ">
                <Tabs color="yellow" radius="xs" orientation="vertical" defaultValue="gallery">
                    <Tabs.List>
                        <Tabs.Tab value="gallery" icon={<BiDetail size={14} />}>Description</Tabs.Tab>
                        <Tabs.Tab value="messages" icon={<BiInfoCircle size={14} />}>Assitional Information</Tabs.Tab>
                        <Tabs.Tab value="settings" icon={<BiStar size={14} />}>Reviews</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="gallery" pl="xs">
                        <Description />
                    </Tabs.Panel>

                    <Tabs.Panel value="messages" pl="xs">
                        <Additional />
                    </Tabs.Panel>

                    <Tabs.Panel value="settings" pl="xs">
                        <Reviews />
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default ProductMoreInfo