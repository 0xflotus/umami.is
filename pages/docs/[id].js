import React from 'react';
import Layout from '../../components/layout';
import Menu from '../../components/menu';
import { getAllPathIds, getHtmlContent } from 'lib/content';

export default function DocsPage({ content }) {
  return (
    <Layout>
      <div className="row">
        <div className="col-3">
          <Menu />
        </div>
        <div className="docs col-9" dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPathIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const content = await getHtmlContent(params.id);
  return {
    props: {
      content,
    },
  };
}
