import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export interface BreadCrumbItem {
  title: string;
  path: string;
}

interface Props {
  path: BreadCrumbItem[];
}

const BreadCrumb: React.FC<Props> = ({ path }) => {
  return (
    <HStack gap="20px" alignItems="center">
      <Link href="/" _hover={{ textDecoration: "none" }}>
        <HStack
          alignItems="center"
          fontWeight={500}
          color="#DE5C8E"
          gap="0"
          _hover={{ fontWeight: 700 }}
        >
          <IoIosArrowBack />
          <Text> back </Text>
        </HStack>
      </Link>
      <Breadcrumb
        color="gray"
        separator={<IoIosArrowForward color="gray.500" />}
      >
        {path.map((item) => {
          return (
            <BreadcrumbItem>
              <BreadcrumbLink href={item.path}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </HStack>
  );
};

export default BreadCrumb;
