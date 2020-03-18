import '@interactjs/types';
import interact from '@interactjs/interact';
import * as feedback from '@interactjs/feedback';
import * as vueComponents from '@interactjs/vue';
import * as pointerUtils from '@interactjs/utils/pointerUtils';
import * as displace from '@interactjs/utils/displace';
import { exchange } from '@interactjs/utils/exchange';
declare module '@interactjs/core/InteractStatic' {
    interface InteractStatic {
        __utils: {
            exchange: typeof exchange;
            displace: typeof displace;
            pointer: typeof pointerUtils;
        };
        feedback: typeof feedback;
        vue: {
            components: typeof vueComponents;
        };
    }
}
export default interact;
